(function() {
  // Client ID should be injected at build time or via server-side templating
  // For build tools like webpack/vite, use: process.env.REO_CLIENT_ID
  // For server-side templating, replace __REO_CLIENT_ID__ with actual value
  var clientID = typeof __REO_CLIENT_ID__ !== 'undefined' ? __REO_CLIENT_ID__ : (typeof process !== 'undefined' && process.env && process.env.REO_CLIENT_ID) || '';
  
  if (!clientID) {
    console.warn('Reo tracking: Client ID not configured');
    return;
  }
  
  var initReo = function() {
    if (typeof Reo !== 'undefined') {
      Reo.init({
        clientID: clientID
      });
    }
  };
  
  var script = document.createElement('script');
  script.src = 'https://static.reo.dev/' + encodeURIComponent(clientID) + '/reo.js';
  script.defer = true;
  script.onload = initReo;
  
  document.head.appendChild(script);
})();