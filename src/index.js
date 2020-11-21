import "./style.scss";
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faMedium,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub, faTwitter, faTwitch, faMedium);
dom.watch();
