import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the icon libraries that can be used.
 */
function FontAwesome() {
  library.add(fab);
  library.add(far);
  library.add(fas);
}

export default FontAwesome;
