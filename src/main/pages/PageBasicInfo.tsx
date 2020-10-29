import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const PageBasicInfo: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('female');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h3" component="h1" className={classes.title}>Basic Information</Typography>
        <Typography variant="subtitle2" gutterBottom className={classes.subtitle}> Configure your name and personal details. Settings changed here will overwrite Global Defaults and Team Defaults.</Typography>
      </div>
      <div className={classes.userinfo}>
        <Avatar className={classes.avatar}><Typography variant="h3" component="h1" className={classes.avatarTitle}>NM</Typography></Avatar>
        <Typography variant="h3" component="h1" className={classes.title}>Niloufar Mazloumpar</Typography>
        <img src={require('../../assets/edit-24px.svg')} className={classes.edit} alt="logo png" />
      </div>
      <div className={classes.detailinfo}>
        <div>
          <Typography variant="h6" gutterBottom className={classes.detailtitle}>Phone Number</Typography>
          <TextField id="outlined-basic" size="small" defaultValue="XXX" className={classes.phonePrefix + ' ' + classes.detailinput} variant="outlined"
            inputProps={{
              style: { fontSize: 15 }
            }}
          />
          <TextField id="outlined-basic" size="small" defaultValue="XXX" className={classes.phoneSuffix + ' ' + classes.detailinput} variant="outlined"
            inputProps={{
              style: { fontSize: 15 }
            }}
          />
        </div>
        <div className={classes.margin}>
          <Typography variant="h6" gutterBottom className={classes.detailtitle}>Email Address</Typography>
          <TextField id="outlined-basic" size="small" defaultValue="email@email.com" className={classes.detailinput} variant="outlined"
            inputProps={{
              style: { fontSize: 15 }
            }}
          />
        </div>
      </div>
      <div className={classes.detailinfo}>
        <div>
          <Typography variant="h6" gutterBottom className={classes.detailtitle}>Default Currency</Typography>
          <Select
            native
            variant="outlined"
            inputProps={{
              name: 'age',
              id: 'filled-age-native-simple',
            }}
            className={classes.currency + ' ' + classes.detailinput}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </div>
        <div className={classes.margin}>
          <Typography variant="h6" gutterBottom className={classes.detailtitle}>Default Calendar layout</Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} className={classes.dateRadio}>
              <FormControlLabel value="female" control={<Radio color="default" />} label={<Typography className={classes.dateLabel}>DD/MM/YYYY</Typography>} />
              <FormControlLabel value="male" control={<Radio color="default" />} label={<Typography className={classes.dateLabel}>MM/DD/YYYY</Typography>} />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'NeuzeitFont',
    fontWeight: 'lighter',
  },
  margin: {
    marginLeft: '172px'
  },
  title: {
    fontSize: '24px',
    fontFamily: 'NeuzeitFont',
    fontWeight: 'lighter',
  },
  subtitle: {
    marginTop: '23px',
    fontFamily: 'NeuzeitFont',
    letterSpacing: '0px',
    color: '#45565E',
    fontWeight: 'lighter',
  },
  userinfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '52px'
  },
  avatarTitle: {
    fontWeight: 'bold',
    fontSize: 35
  },
  avatar: {
    width: '79px',
    height: '78px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '3px solid #45565E',
    color: '#45565E',
    marginRight: '24px'
  },
  edit: {
    width: '20px',
    height: '18px',
    marginLeft: '13px'
  },
  detailinfo: {
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  detailtitle: {
    color: '#45565E',
    fontFamily: 'NeuzeitFont',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  detailinput: {
    // border: '1px solid #93A0A7',
    // borderRadius: '2px',
    borderColor: '#93A0A7',
    height: '40px'
  },
  phonePrefix: {
    width: '60px',
    fontWeight: 'normal',
  },
  phoneSuffix: {
    width: '204px',
    marginLeft: '16px'
  },
  resize: {
    fontSize: 10
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: '#93A0A7',
    borderRadius: '2px'
  },
  currency: {
    width: '280px'
  },
  calendar: {
    display: 'flex'
  },
  dateLabel: {
    color: '#45565E',
    fontSize: 14
  },
  dateRadio: {
    display: 'flex',
    flexDirection: 'row'
  }
}))

export default PageBasicInfo
