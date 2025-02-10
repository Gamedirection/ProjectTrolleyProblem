// Generated by CoffeeScript 1.12.7
(function() {
  var Object_Frame,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_Frame = (function(superClass) {
    extend(Object_Frame, superClass);


    /**
    * An UI frame object to display an frame on screen useful for buttons, windows, etc.
    *
    * @module ui
    * @class Object_Frame
    * @extends ui.Object_UIElement
    * @memberof ui
    * @constructor
     */

    function Object_Frame(skin) {
      Object_Frame.__super__.constructor.apply(this, arguments);
      this.image = skin || GameManager.windowSkin;

      /**
      * The UI object's visual-component to display the game object on screen.
      * @property visual
      * @type gs.Component_Frame
       */
      this.visual = new gs.Component_Frame();

      /**
      * The thickness of the frame/border in pixels. Default is 16.
      * @property frameThickness
      * @type number
       */
      this.frameThickness = 16;

      /**
      * The corner-size of the frame in pixels. Default is 16(16x16 pixel).
      * @property frameCornerSize
      * @type number
       */
      this.frameCornerSize = 16;
      this.addComponent(this.visual);
    }

    return Object_Frame;

  })(ui.Object_UIElement);

  ui.Object_Frame = Object_Frame;

}).call(this);
