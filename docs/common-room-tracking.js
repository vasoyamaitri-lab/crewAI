(function() {
  if (typeof window === 'undefined') return;
  if (typeof window.signals !== 'undefined') return;
  
  // Site ID should be injected at build time or via server-side templating
  // Example: Replace COMMON_ROOM_SITE_ID during build process
  var siteId = window.COMMON_ROOM_SITE_ID || document.currentScript?.getAttribute('data-site-id');
  
  if (!siteId) {
    console.warn('Common Room site ID not configured');
    return;
  }
  
  // Validate site ID format (UUID)
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(siteId)) {
    console.warn('Invalid Common Room site ID format');
    return;
  }
  
  var script = document.createElement('script');
  script.src = 'https://cdn.cr-relay.com/v1/site/' + encodeURIComponent(siteId) + '/signals.js';
  script.async = true;
  window.signals = Object.assign(
    [],
    ['page', 'identify', 'form'].reduce(function (acc, method){
      acc[method] = function () {
        signals.push([method, arguments]);
        return signals;
      };
     return acc;
    }, {})
  );
  document.head.appendChild(script);
})();