# Automated Security Fixes

2 fixes applied:

1. **docs/common-room-tracking.js** - Move the site ID to a configuration variable. For client-side scripts, use a build-time environment variable or data attribute injection.
2. **docs/reo-tracking.js** - Replace hardcoded client ID with a reference to an environment variable or configuration that can be injected at build/runtime. For client-side scripts, use a build-time replacement or server-side template injection.
