// src/icons/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core'

// Solid Icons
import { 
  faUser, 
  faHeart, 
  faShoppingCart, 
  faMagnifyingGlass,
  faChevronDown,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

// Regular Icons
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

// Brand Icons (optional)
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser,
  faHeart,
  farHeart,
  faShoppingCart,
  faMagnifyingGlass,
  faChevronDown,
  faBars,
  faXmark,
  faFacebook,
  faTwitter,
  faInstagram
)
