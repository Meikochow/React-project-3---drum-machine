var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var sounds = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Linkin_park_live",
  url: "https://www.myinstants.com/media/sounds/crawling-in-my-memes.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Curb",
  url: "https://www.myinstants.com/media/sounds/curb2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "PewDieDuck",
  url: "https://www.myinstants.com/media/sounds/quack_-_pewdiepie-notification_sound-1641953.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Dramatic",
  url: "https://www.myinstants.com/media/sounds/dramatic.swf.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Air_horn",
  url: "https://www.myinstants.com/media/sounds/air-horn-sound.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "PewDieOMG",
  url: "https://www.myinstants.com/media/sounds/ohmygah-deleted-pewdiepie-video.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Crickets",
  url: "https://www.myinstants.com/media/sounds/crickets.swf.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Skrattar?",
  url: "https://www.myinstants.com/media/sounds/skrattar-du-forlorar-du-mannen.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "SpongeBob_fail",
  url: "https://www.myinstants.com/media/sounds/spongebob-fail.mp3" }];


var sounds2 = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Jeff",
  url: "https://www.myinstants.com/media/sounds/ringtone_20.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "John_Cena",
  url: "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "NANI!?",
  url: "https://www.myinstants.com/media/sounds/nani-meme.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "NOOOO!",
  url: "https://www.myinstants.com/media/sounds/noooooooooo.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Warner_bros",
  url: "https://www.myinstants.com/media/sounds/warner_bros_flute-ringtone-1447281.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Game_of_flutes",
  url: "https://www.myinstants.com/media/sounds/game-of-flutes.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Bruh",
  url: "https://www.myinstants.com/media/sounds/movie_1.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "I_have",
  url: "https://www.myinstants.com/media/sounds/untitled_264.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Weed_EveryDay",
  url: "https://www.myinstants.com/media/sounds/snoop-dogg-smoke-weed-everyday.mp3" }];


var sounds3 = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Legitness",
  url: "https://www.myinstants.com/media/sounds/wjkldksdjlvjk-twbho-lagnkdd.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "How_dare_they!?",
  url: "https://www.myinstants.com/media/sounds/when-they-ask.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "FrishUvhagoDoo",
  url: "https://www.myinstants.com/media/sounds/tmp_1932-fre-sha-voca-do-509369001.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "To_be_continued",
  url: "https://www.myinstants.com/media/sounds/untitled_1071.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Toby_nailled_it_this_time",
  url: "https://www.myinstants.com/media/sounds/nogod.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Little_Einsteins",
  url: "https://www.myinstants.com/media/sounds/einsteinmed.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "McLMAO",
  url: "https://www.myinstants.com/media/sounds/oh-ive-mcfallen.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "What's_up_with_that_dude?",
  url: "https://www.myinstants.com/media/sounds/bruh_look_at_this_dude1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Oh_you!",
  url: "https://www.myinstants.com/media/sounds/ffff_1.mp3" }];


var sounds4 = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "run",
  url: "https://www.myinstants.com/media/sounds/awolnation-run.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "VSauce",
  url: "https://www.myinstants.com/media/sounds/hey_vsauce_michael.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Law&Order",
  url: "https://www.myinstants.com/media/sounds/dun-dun.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Take_on_me",
  url: "https://www.myinstants.com/media/sounds/girl-with.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Spagett",
  url: "https://www.myinstants.com/media/sounds/somebody_toucha_my_spaghett_full_episode-gt6clln539o-1.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Bass",
  url: "https://www.myinstants.com/media/sounds/bass-boost.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "God_Damnn!",
  url: "https://www.myinstants.com/media/sounds/god-damn_NDnVMSy.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Just_get_it_together!",
  url: "https://www.myinstants.com/media/sounds/getyourshit_full_lowquality.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Evil",
  url: "https://www.myinstants.com/media/sounds/audio-cortado-2.mp3" }];


var clicked = { 'background': " radial-gradient(pink,#99ff99,#33ccff)" };
var unClicked = { 'backgroundColor': "" };var
Pad = function (_React$Component) {_inherits(Pad, _React$Component);
  function Pad(props) {_classCallCheck(this, Pad);var _this = _possibleConstructorReturn(this, (Pad.__proto__ || Object.getPrototypeOf(Pad)).call(this,
    props));
    _this.state = {
      padColor: unClicked };

    _this.playSound = _this.playSound.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);return _this;
  }_createClass(Pad, [{ key: "componentDidMount", value: function componentDidMount()
    {
      document.addEventListener("keydown", this.handleKeyPress);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.handleKeyPress);
    } }, { key: "handleKeyPress", value: function handleKeyPress(
    e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    } }, { key: "playSound", value: function playSound()
    {var _this2 = this;
      var audio = new Audio(this.props.clip);
      if (this.props.gameStatus == "On") {audio.play();
        this.props.soundsName(this.props.clipId.replace(/_/g, ' '));
        audio.volume = this.props.volume;

        this.setState({ padColor: clicked });
        setTimeout(function () {return _this2.setState({ padColor: unClicked });}, 500);}

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { onClick: this.playSound, id: this.props.clipId, className: "drum-pad", style: this.props.padDesign }, this.props.keyTrigger,
          React.createElement("div", { id: "nameWrap", style: this.state.padColor }),
          React.createElement("audio", {
            className: "clip",
            id: this.props.keyTrigger,
            src: this.props.clip,
            type: "audio/mpeg" })));




    } }]);return Pad;}(React.Component);var

PadGroup = function (_React$Component2) {_inherits(PadGroup, _React$Component2);
  function PadGroup(props) {_classCallCheck(this, PadGroup);var _this3 = _possibleConstructorReturn(this, (PadGroup.__proto__ || Object.getPrototypeOf(PadGroup)).call(this,
    props));
    _this3.state = {};return _this3;
  }_createClass(PadGroup, [{ key: "render", value: function render()
    {var _this4 = this;
      var padGroup = void 0;
      this.props.gameStatus == "On" ? padGroup = this.props.currentPadBank.map(function (obj, i, arr) {
        return (
          React.createElement(Pad, { key: i,
            clipId: arr[i].id,
            clip: arr[i].url,
            keyTrigger: arr[i].keyTrigger,
            keyCode: arr[i].keyCode,
            soundsName: _this4.props.soundName,
            volume: _this4.props.volume,
            padDesign: _this4.props.padDesign,
            gameStatus: _this4.props.gameStatus }));


      }) : padGroup = this.props.currentPadBank.map(function (obj, i, arr) {
        return (
          React.createElement(Pad, { key: i,
            clipId: arr[i].id,
            clip: '#',
            keyTrigger: arr[i].keyTrigger,
            keyCode: arr[i].keyCode,
            soundsName: _this4.props.soundName,
            volume: _this4.props.volume,
            padDesign: _this4.props.padDesign,
            gameStatus: _this4.props.gameStatus }));


      });
      return React.createElement("div", { id: "padGroup" }, padGroup);
    } }]);return PadGroup;}(React.Component);

var bank1 = { 'background': 'linear-gradient(to right,#ffffb3 0%,  #99ff99 200%)' };
var bank2 = { 'background': "linear-gradient(to top,#cce6ff 0%, #ffccb3 100%)" };
var bank3 = { 'background': "linear-gradient(to left,#b3b3ff 0%, white 100%)" };
var bank4 = { 'background': "linear-gradient(to bottom,#ffb3d1 0%, #c2f0f0 100%)" };
var padOff = { 'backgroundColor': "grey" };var
DrumMachine = function (_React$Component3) {_inherits(DrumMachine, _React$Component3);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this5 = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this5.state = {
      currentPadBank: sounds,
      gameStatus: 'On',
      soundName: '',
      volume: 0.1,
      padDesign: bank1,
      baseTrack: false,
      powerIcon: "fa fa-toggle-on fa-4x",
      bankStyle: "bank1" };

    _this5.gameStatus = _this5.gameStatus.bind(_this5);
    _this5.fetchSoundName = _this5.fetchSoundName.bind(_this5);
    _this5.soundBankManager = _this5.soundBankManager.bind(_this5);
    _this5.setVolume = _this5.setVolume.bind(_this5);return _this5;
  }_createClass(DrumMachine, [{ key: "gameStatus", value: function gameStatus()
    {
      this.state.gameStatus == "Off" ? this.setState({ gameStatus: 'On', powerIcon: "fa fa-toggle-on fa-4x", currentPadBank: sounds, padDesign: bank1, bankStyle: "bank1" }) : this.setState({ gameStatus: 'Off', soundName: "", powerIcon: "fa fa-toggle-off fa-4x", padDesign: padOff, bankStyle: "" });

    } }, { key: "fetchSoundName", value: function fetchSoundName(
    name) {
      if (this.state.gameStatus == 'On') {
        this.setState({
          soundName: name });

      }
    } }, { key: "soundBankManager", value: function soundBankManager(
    e) {
      if (this.state.gameStatus == "On") {
        switch (e.target.value) {
          case "1":return this.setState({ currentPadBank: sounds, soundName: "Set # 1", padDesign: bank1, bankStyle: "bank1" });
          case "2":return this.setState({ currentPadBank: sounds2, soundName: "Set # 2", padDesign: bank2, bankStyle: "bank2" });
          case "3":return this.setState({ currentPadBank: sounds3, soundName: "Set # 3", padDesign: bank3, bankStyle: "bank3" });
          case "4":return this.setState({ currentPadBank: sounds4, soundName: "Set # 4", padDesign: bank4, bankStyle: "bank4" });
          default:return this.setState({ currentPadBank: sounds, soundName: "Set # 1", padDesign: bank1 });}

      }
    } }, { key: "setVolume", value: function setVolume(
    e) {var _this6 = this;
      if (this.state.gameStatus == "On") {
        this.setState({
          volume: e.target.value,
          soundName: "Volume: " + Math.round(e.target.value * 100) });

        setTimeout(function () {return _this6.setState({ soundName: '' });}, 1000);
      }
    } }, { key: "render", value: function render()
    {var _React$createElement;
      var className1 = this.state.bankStyle == "bank1" ? 'bank1' : '';
      var className2 = this.state.bankStyle == "bank2" ? 'bank2' : '';
      var className3 = this.state.bankStyle == "bank3" ? 'bank3' : '';
      var className4 = this.state.bankStyle == "bank4" ? 'bank4' : '';
      return (
        React.createElement("div", null,
          React.createElement("div", { id: "drum-machine" },
            React.createElement(PadGroup, {
              currentPadBank: this.state.currentPadBank,
              gameStatus: this.state.gameStatus,
              soundName: this.fetchSoundName,
              volume: this.state.volume,
              padDesign: this.state.padDesign }),

            React.createElement("div", { id: "controls" },
              React.createElement("h2", { id: "header" }, React.createElement("li", { className: "fa fa-free-code-camp fa-1x" }), " Meme Pad"),
              React.createElement("div", null,
                React.createElement("input", { id: "one", type: "button", onClick: this.soundBankManager, value: "1", className: className1 }),
                React.createElement("input", { id: "two", type: "button", onClick: this.soundBankManager, value: "2", className: className2 }),
                React.createElement("input", { id: "three", type: "button", onClick: this.soundBankManager, value: "3", className: className3 }),
                React.createElement("input", { id: "four", type: "button", onClick: this.soundBankManager, value: "4", className: className4 })),

              React.createElement("p", { id: "display", title: "DISPLAY" }, this.state.soundName),
              React.createElement("input", (_React$createElement = { type: "range" }, _defineProperty(_React$createElement, "type", "range"), _defineProperty(_React$createElement, "min", "0"), _defineProperty(_React$createElement, "max", "1"), _defineProperty(_React$createElement, "step", "0.01"), _defineProperty(_React$createElement, "value", this.state.volume), _defineProperty(_React$createElement, "onChange", this.setVolume), _defineProperty(_React$createElement, "title", "VOLUME"), _React$createElement)),
              React.createElement("i", { onClick: this.gameStatus, className: this.state.powerIcon, title: "POWER" }))),


          React.createElement("footer", null, "Coded by Victor Cojocaru. 2018", React.createElement("br", null), "sounds source www.myinstants.com")));


    } }]);return DrumMachine;}(React.Component);

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("app"));