function inherits(childCtor, parentCtor) {
  function tempCtor() {
  }
  ;
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  childCtor.prototype.constructor = childCtor;
}
function MarkerLabel_(marker, crossURL, handCursorURL) {
  this.marker_ = marker;
  this.handCursorURL_ = marker.handCursorURL;
  this.labelDiv_ = document.createElement('div');
  this.labelDiv_.style.cssText = 'position: absolute; overflow: hidden;';
  this.eventDiv_ = document.createElement('div');
  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;
  this.eventDiv_.setAttribute('onselectstart', 'return false;');
  this.eventDiv_.setAttribute('ondragstart', 'return false;');
  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}
inherits(MarkerLabel_, google.maps.OverlayView);
MarkerLabel_.getSharedCross = function (crossURL) {
  var div;
  if (typeof MarkerLabel_.getSharedCross.crossDiv === 'undefined') {
    div = document.createElement('img');
    div.style.cssText = 'position: absolute; z-index: 1000002; display: none;';
    div.style.marginLeft = '-8px';
    div.style.marginTop = '-9px';
    div.src = crossURL;
    MarkerLabel_.getSharedCross.crossDiv = div;
  }
  return MarkerLabel_.getSharedCross.crossDiv;
};
MarkerLabel_.prototype.onAdd = function () {
  var me = this;
  var cMouseIsDown = false;
  var cDraggingLabel = false;
  var cSavedZIndex;
  var cLatOffset, cLngOffset;
  var cIgnoreClick;
  var cRaiseEnabled;
  var cStartPosition;
  var cStartCenter;
  var cRaiseOffset = 20;
  var cDraggingCursor = 'url(' + this.handCursorURL_ + ')';
  var cAbortEvent = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };
  var cStopBounce = function () {
    me.marker_.setAnimation(null);
  };
  this.getPanes().overlayImage.appendChild(this.labelDiv_);
  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
  if (typeof MarkerLabel_.getSharedCross.processed === 'undefined') {
    this.getPanes().overlayImage.appendChild(this.crossDiv_);
    MarkerLabel_.getSharedCross.processed = true;
  }
  this.listeners_ = [
    google.maps.event.addDomListener(this.eventDiv_, 'mouseover', function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        this.style.cursor = 'pointer';
        google.maps.event.trigger(me.marker_, 'mouseover', e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'mouseout', function (e) {
      if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
        this.style.cursor = me.marker_.getCursor();
        google.maps.event.trigger(me.marker_, 'mouseout', e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'mousedown', function (e) {
      cDraggingLabel = false;
      if (me.marker_.getDraggable()) {
        cMouseIsDown = true;
        this.style.cursor = cDraggingCursor;
      }
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, 'mousedown', e);
        cAbortEvent(e);
      }
    }),
    google.maps.event.addDomListener(document, 'mouseup', function (mEvent) {
      var position;
      if (cMouseIsDown) {
        cMouseIsDown = false;
        me.eventDiv_.style.cursor = 'pointer';
        google.maps.event.trigger(me.marker_, 'mouseup', mEvent);
      }
      if (cDraggingLabel) {
        if (cRaiseEnabled) {
          position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
          position.y += cRaiseOffset;
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          try {
            me.marker_.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(cStopBounce, 1406);
          } catch (e) {
          }
        }
        me.crossDiv_.style.display = 'none';
        me.marker_.setZIndex(cSavedZIndex);
        cIgnoreClick = true;
        cDraggingLabel = false;
        mEvent.latLng = me.marker_.getPosition();
        google.maps.event.trigger(me.marker_, 'dragend', mEvent);
      }
    }),
    google.maps.event.addListener(me.marker_.getMap(), 'mousemove', function (mEvent) {
      var position;
      if (cMouseIsDown) {
        if (cDraggingLabel) {
          mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
          position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
          if (cRaiseEnabled) {
            me.crossDiv_.style.left = position.x + 'px';
            me.crossDiv_.style.top = position.y + 'px';
            me.crossDiv_.style.display = '';
            position.y -= cRaiseOffset;
          }
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          if (cRaiseEnabled) {
            me.eventDiv_.style.top = position.y + cRaiseOffset + 'px';
          }
          google.maps.event.trigger(me.marker_, 'drag', mEvent);
        } else {
          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
          cSavedZIndex = me.marker_.getZIndex();
          cStartPosition = me.marker_.getPosition();
          cStartCenter = me.marker_.getMap().getCenter();
          cRaiseEnabled = me.marker_.get('raiseOnDrag');
          cDraggingLabel = true;
          me.marker_.setZIndex(1000000);
          mEvent.latLng = me.marker_.getPosition();
          google.maps.event.trigger(me.marker_, 'dragstart', mEvent);
        }
      }
    }),
    google.maps.event.addDomListener(document, 'keydown', function (e) {
      if (cDraggingLabel) {
        if (e.keyCode === 27) {
          cRaiseEnabled = false;
          me.marker_.setPosition(cStartPosition);
          me.marker_.getMap().setCenter(cStartCenter);
          google.maps.event.trigger(document, 'mouseup', e);
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'click', function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        if (cIgnoreClick) {
          cIgnoreClick = false;
        } else {
          google.maps.event.trigger(me.marker_, 'click', e);
          cAbortEvent(e);
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'dblclick', function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, 'dblclick', e);
        cAbortEvent(e);
      }
    }),
    google.maps.event.addListener(this.marker_, 'dragstart', function (mEvent) {
      if (!cDraggingLabel) {
        cRaiseEnabled = this.get('raiseOnDrag');
      }
    }),
    google.maps.event.addListener(this.marker_, 'drag', function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(cRaiseOffset);
          me.labelDiv_.style.zIndex = 1000000 + (this.get('labelInBackground') ? -1 : +1);
        }
      }
    }),
    google.maps.event.addListener(this.marker_, 'dragend', function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(0);
        }
      }
    }),
    google.maps.event.addListener(this.marker_, 'position_changed', function () {
      me.setPosition();
    }),
    google.maps.event.addListener(this.marker_, 'zindex_changed', function () {
      me.setZIndex();
    }),
    google.maps.event.addListener(this.marker_, 'visible_changed', function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, 'labelvisible_changed', function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, 'title_changed', function () {
      me.setTitle();
    }),
    google.maps.event.addListener(this.marker_, 'labelcontent_changed', function () {
      me.setContent();
    }),
    google.maps.event.addListener(this.marker_, 'labelanchor_changed', function () {
      me.setAnchor();
    }),
    google.maps.event.addListener(this.marker_, 'labelclass_changed', function () {
      me.setStyles();
    }),
    google.maps.event.addListener(this.marker_, 'labelstyle_changed', function () {
      me.setStyles();
    })
  ];
};
MarkerLabel_.prototype.onRemove = function () {
  var i;
  this.labelDiv_.parentNode.removeChild(this.labelDiv_);
  this.eventDiv_.parentNode.removeChild(this.eventDiv_);
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
};
MarkerLabel_.prototype.draw = function () {
  this.setContent();
  this.setTitle();
  this.setStyles();
};
MarkerLabel_.prototype.setContent = function () {
  var content = this.marker_.get('labelContent');
  if (typeof content.nodeType === 'undefined') {
    this.labelDiv_.innerHTML = content;
    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
  } else {
    this.labelDiv_.innerHTML = '';
    this.labelDiv_.appendChild(content);
    content = content.cloneNode(true);
    this.eventDiv_.appendChild(content);
  }
};
MarkerLabel_.prototype.setTitle = function () {
  this.eventDiv_.title = this.marker_.getTitle() || '';
};
MarkerLabel_.prototype.setStyles = function () {
  var i, labelStyle;
  this.labelDiv_.className = this.marker_.get('labelClass');
  this.eventDiv_.className = this.labelDiv_.className;
  this.labelDiv_.style.cssText = '';
  this.eventDiv_.style.cssText = '';
  labelStyle = this.marker_.get('labelStyle');
  for (i in labelStyle) {
    if (labelStyle.hasOwnProperty(i)) {
      this.labelDiv_.style[i] = labelStyle[i];
      this.eventDiv_.style[i] = labelStyle[i];
    }
  }
  this.setMandatoryStyles();
};
MarkerLabel_.prototype.setMandatoryStyles = function () {
  this.labelDiv_.style.position = 'absolute';
  this.labelDiv_.style.overflow = 'hidden';
  if (typeof this.labelDiv_.style.opacity !== 'undefined' && this.labelDiv_.style.opacity !== '') {
    this.labelDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=' + this.labelDiv_.style.opacity * 100 + ')"';
    this.labelDiv_.style.filter = 'alpha(opacity=' + this.labelDiv_.style.opacity * 100 + ')';
  }
  this.eventDiv_.style.position = this.labelDiv_.style.position;
  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
  this.eventDiv_.style.opacity = 0.01;
  this.eventDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"';
  this.eventDiv_.style.filter = 'alpha(opacity=1)';
  this.setAnchor();
  this.setPosition();
  this.setVisible();
};
MarkerLabel_.prototype.setAnchor = function () {
  var anchor = this.marker_.get('labelAnchor');
  this.labelDiv_.style.marginLeft = -anchor.x + 'px';
  this.labelDiv_.style.marginTop = -anchor.y + 'px';
  this.eventDiv_.style.marginLeft = -anchor.x + 'px';
  this.eventDiv_.style.marginTop = -anchor.y + 'px';
};
MarkerLabel_.prototype.setPosition = function (yOffset) {
  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
  if (typeof yOffset === 'undefined') {
    yOffset = 0;
  }
  this.labelDiv_.style.left = Math.round(position.x) + 'px';
  this.labelDiv_.style.top = Math.round(position.y - yOffset) + 'px';
  this.eventDiv_.style.left = this.labelDiv_.style.left;
  this.eventDiv_.style.top = this.labelDiv_.style.top;
  this.setZIndex();
};
MarkerLabel_.prototype.setZIndex = function () {
  var zAdjust = this.marker_.get('labelInBackground') ? -1 : +1;
  if (typeof this.marker_.getZIndex() === 'undefined') {
    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  } else {
    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  }
};
MarkerLabel_.prototype.setVisible = function () {
  if (this.marker_.get('labelVisible')) {
    this.labelDiv_.style.display = this.marker_.getVisible() ? 'block' : 'none';
  } else {
    this.labelDiv_.style.display = 'none';
  }
  this.eventDiv_.style.display = this.labelDiv_.style.display;
};
function MarkerWithLabel(opt_options) {
  opt_options = opt_options || {};
  opt_options.labelContent = opt_options.labelContent || '';
  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
  opt_options.labelClass = opt_options.labelClass || 'markerLabels';
  opt_options.labelStyle = opt_options.labelStyle || {};
  opt_options.labelInBackground = opt_options.labelInBackground || false;
  if (typeof opt_options.labelVisible === 'undefined') {
    opt_options.labelVisible = true;
  }
  if (typeof opt_options.raiseOnDrag === 'undefined') {
    opt_options.raiseOnDrag = true;
  }
  if (typeof opt_options.clickable === 'undefined') {
    opt_options.clickable = true;
  }
  if (typeof opt_options.draggable === 'undefined') {
    opt_options.draggable = false;
  }
  if (typeof opt_options.optimized === 'undefined') {
    opt_options.optimized = false;
  }
  opt_options.crossImage = opt_options.crossImage || 'http' + (document.location.protocol === 'https:' ? 's' : '') + '://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png';
  opt_options.handCursor = opt_options.handCursor || 'http' + (document.location.protocol === 'https:' ? 's' : '') + '://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur';
  opt_options.optimized = false;
  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor);
  google.maps.Marker.apply(this, arguments);
}
inherits(MarkerWithLabel, google.maps.Marker);
MarkerWithLabel.prototype.setMap = function (theMap) {
  google.maps.Marker.prototype.setMap.apply(this, arguments);
  this.label.setMap(theMap);
};
'use strict';
var app = angular.module('WeagleApp', []);
Parse.initialize('6qhUFEXtzdSTLwzG9VMeCU5oFaTWtgelh61unUiw', 'cTi3fECgna7cBjeYdyNIA6qnjehp1O8Ldrs8c5pe');
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'views/login.html'
    }).when('/home', {
      controller: 'GetLocation',
      templateUrl: 'views/main.html'
    }).when('/message', {
      controller: 'MessagesCtrl',
      templateUrl: 'views/message.html'
    }).otherwise({ redirectTo: '/home' });
  }
]);
app.run([
  '$rootScope',
  '$location',
  'AuthenticationService',
  'FlashService',
  function ($rootScope, $location, AuthenticationService, FlashService) {
    var routesThatRequireAuth = [
        '/home',
        '/message'
      ];
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (_(routesThatRequireAuth).contains($location.path()) && !AuthenticationService.isLoggedIn()) {
        $location.path('/login');
        FlashService.show('Please log in to continue.');
      }
      $rootScope.nav_current = $location.path();
    });
  }
]);
app.factory('FlashService', [
  '$rootScope',
  function ($rootScope) {
    return {
      show: function (message) {
        $rootScope.flash = message;
      },
      clear: function () {
        $rootScope.flash = '';
      }
    };
  }
]);
app.factory('AuthenticationService', [
  '$rootScope',
  '$location',
  'FlashService',
  function ($rootScope, $location, FlashService) {
    var loginError = function (msg) {
      FlashService.show(msg);
    };
    var setUser = function (name, email) {
      $rootScope.Username = name;
      $rootScope.Useremail = email;
    };
    var unsetUser = function () {
      Parse.User.logOut();
      $rootScope.Username = '';
      $rootScope.Useremail = '';
    };
    var clearLoginLFlag = function () {
      $rootScope.loginLoadingFlag = false;
    };
    return {
      login: function (credentials) {
        $rootScope.loginLoadingFlag = true;
        Parse.User.logIn(credentials.username, credentials.password, {
          success: function (user) {
            setUser(user.get('name'), user.getEmail());
            FlashService.clear();
            $location.path('/home');
            $rootScope.$apply();
            clearLoginLFlag();
          },
          error: function (error) {
            loginError('Username/Password incorrect');
            clearLoginLFlag();
            $rootScope.$apply();
          }
        });
      },
      logout: function () {
        unsetUser();
        $location.path('/login');
      },
      isLoggedIn: function () {
        var currentUser = Parse.User.current();
        if (currentUser) {
          setUser(currentUser.get('name'), currentUser.getEmail());
          return true;
        } else {
          return false;
        }
      }
    };
  }
]);
var controllers = {};
controllers.LoginCtrl = function ($scope, AuthenticationService) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function () {
    AuthenticationService.login($scope.credentials);
  };
};
controllers.GetLocation = function ($scope, $rootScope, AuthenticationService, FlashService) {
  $scope.noDeviceFlag = false;
  $rootScope.logout = function () {
    AuthenticationService.logout();
  };
  var users = new Parse.Query('User');
  users.equalTo('parent', $scope.Useremail);
  users.find({
    success: function (results) {
      if (results.length === 0) {
        $scope.$apply($scope.noDeviceFlag = true);
      } else {
        $scope.$apply(function () {
          $scope.devices = results.map(function (obj) {
            return {
              id: obj.get('email'),
              name: obj.get('name')
            };
          });
        });
      }
      if (!$rootScope.$on('$routeChangeStart')) {
        $scope.showAll();
      }
    },
    error: function (error) {
      $scope.noDeviceFlag = true;
      console.error('Parse Error: ' + error.code + ' ' + error.message);
    }
  });
  google.maps.visualRefresh = true;
  var latLng = new google.maps.LatLng(12, 75);
  var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 7,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  var markersArray = [];
  function clearOverlays() {
    $scope.mapLoading = true;
    for (var i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }
  $scope.map_locate = function (email, name, flag) {
    google.maps.event.trigger(map, 'resize');
    var location = new Parse.Query('Location');
    location.equalTo('email', email);
    location.find({
      success: function (results) {
        FlashService.clear();
        if (results.length > 0) {
          if (!flag) {
            clearOverlays();
          }
          var result = results[0];
          latLng = new google.maps.LatLng(result.get('lat'), result.get('lon'));
          var marker = new MarkerWithLabel({
              position: latLng,
              map: map,
              labelContent: name,
              labelAnchor: new google.maps.Point(22, 0),
              labelClass: 'label label-success',
              labelStyle: { opacity: 0.85 }
            });
          markersArray.push(marker);
          map.panTo(latLng);
          $scope.mapLoading = false;
        } else {
          if (!flag) {
            FlashService.show('No location information for this Device');
          }
        }
        $scope.$apply();
      },
      error: function (error) {
        console.error('Parse Error: ' + error.code + ' ' + error.message);
      }
    });
  };
  $scope.showAll = function () {
    clearOverlays();
    users = new Parse.Query('User');
    users.equalTo('parent', $scope.Useremail);
    users.find({
      success: function (results) {
        for (var i in results) {
          $scope.map_locate(results[i].getEmail(), results[i].get('name'), true);
        }
        $scope.mapLoading = false;
      }
    });
  };
  $scope.findMe = function () {
  };
};
controllers.MessagesCtrl = function ($scope, $rootScope) {
  $rootScope.logout = function () {
    AuthenticationService.logout();
  };
  var users = new Parse.Query('User');
  var useremail = $scope.Useremail;
  $scope.users_email_from_parse = [];
  $scope.userEmailStack = [];
  users.find({
    success: function (results) {
      for (var i in results) {
        $scope.users_email_from_parse.push({
          index: i,
          email: results[i].get('email'),
          value: results[i].get('name')
        });
      }
      $('#wea_InputEmail').typeahead({
        name: 'user',
        local: $scope.users_email_from_parse,
        engine: Hogan,
        template: [
          '<p class="typeahead-name">{{value}}</p>',
          '<p class="typeahead-email">{{email}}</p>'
        ].join('')
      }).on('typeahead:selected', function ($e, datum) {
        $scope.$apply(function () {
          $scope.flagAlreadyAdded = false;
          for (var i in $scope.userEmailStack) {
            if ($scope.userEmailStack[i].index === datum.index)
              $scope.flagAlreadyAdded = true;
          }
          if (!$scope.flagAlreadyAdded)
            $scope.userEmailStack.push(datum);
        });
        $(this).val('');
      });
    },
    error: function (error) {
      console.error('Parse Error: ' + error.code + ' ' + error.message);
    }
  });
  $scope.delete_user = function (index) {
    $scope.$apply($scope.userEmailStack.splice(index, 1));
  };
  $scope.send_message = function () {
    var Messages = Parse.Object.extend('messages');
    $scope.width = 0;
    var value_to_add = 100 / $scope.userEmailStack.length;
    $scope.message_sending = true;
    for (var i in $scope.userEmailStack) {
      var message = new Messages();
      message.set('sender', useremail);
      message.set('receiver', $scope.userEmailStack[i].email);
      message.set('readFlag', false);
      message.set('message', $scope.wea_InputMessage);
      message.save(null, {
        success: function () {
          $scope.$apply(function () {
            $scope.width += value_to_add;
            if ($scope.width > 95)
              $scope.messagesSend = true;
          });
        },
        error: function (error) {
          colsole.error('Failed to create new object, with error code: ' + error.description);
        }
      });
    }
  };
};
app.controller(controllers);