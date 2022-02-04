import '../plugins/fortawesome';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLinkStub } from '@vue/test-utils';

export default {
  components: {
    'fa-icon': FontAwesomeIcon,
  },
  stubs: {
    'router-link': RouterLinkStub,
  },
};
