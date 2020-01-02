import { withStyles } from '@material-ui/core/styles'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { indigo} from '@material-ui/core/colors';



const theme = createMuiTheme({
        palette: {
            primary: pink,
            secondary: purple // Indigo is probably a good match with pink
      },
  });

  export default theme