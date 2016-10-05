var countries = [
  { name: 'United States', cc: '1', code: 'us' },
  { name: 'Great Britain', cc: '44', code: 'gb' },
  { name: 'Colombia', cc: '57', code: 'co' },
  { name: 'Ecuador', cc: '593', code: 'ec' },
  { name: 'Estonia', cc: '372', code: 'ee' },
  { name: 'Germany', cc: '49', code: 'de' },
  { name: 'Hong Kong', cc: '852', code: 'hk' },
  { name: 'Ireland', cc: '353', code: 'ie' },
  { name: 'Singapore', cc: '65', code: 'sg' },
  { name: 'Spain', cc: '34', code: 'es' },
  { name: 'Brazil', cc: '55', code: 'br' },
];

var DialerApp = React.createClass({
  render: function() {
    return (
      <div id="dialer">
        <DialForm/>
        <AudioControls/>
        <StatusLogging/>
      </div>
    );
  }
});

var DialForm = React.createClass({
  render: function() {
    return (
      <div id="dialform" className="input-group input-group-sm">
        <CountryCodeList/>
        <TelNumber/>
      </div>
    );
  }
});

var CountryCodeList = React.createClass({
  render: function() {
    var countryOptions = countries.map(function(country) {
      var flagClass = 'flag flag-' + country.code;

      return (
        <li>
          <a href="#">
            <div className={ flagClass }></div>
            <span>{ country.name } (+{ country.cc })</span>
          </a>
        </li>
      );
    });
    return (
      <div className="input-group-btn">
        <button type="button" className="btn btn-default dropdown-toggle" 
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            +<span className="country-code">1</span>
            <i className="fa fa-caret-down"></i>
        </button>
        <ul className="dropdown-menu">
            {countryOptions}
        </ul>
      </div>

    );
  }
});

var TelNumber = React.createClass({
  render: function() {
    return (
      <div className="input-group input-group-sm">
        <input type="tel" className="form-control" placeholder="555-666-7777"/>
      </div>
    );
  }
});

var CallButton = React.createClass({
  render: function() {
    return (
      <button className="btn btn-circle btn-success">
        <i className="fa fa-fw fa-phone"></i>
      </button>      
    );
  }
});

var MuteButton = React.createClass({
  render: function() {
    return (
      <button className="btn btn-circle btn-default">
        <i className="fa fa-fw fa-microphone"></i>
      </button>
    );
  }
});

var AudioControls = React.createClass({
  render: function() {
    return (
      <div className="controls">
        <CallButton/>
        <MuteButton/>
      </div>
    );
  }
});

var StatusLogging = React.createClass({
  render: function() {
    return (
      <div>
        <div className="log">Calling +181931265131</div>
        <p>EccentricXanderIndianapolis</p>
      </div>
    )
  }
});

ReactDOM.render(
  <DialerApp/>,
  document.getElementById('dialer-app')
);