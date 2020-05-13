import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
      marginTop: '1%',
      marginLeft: '1%',
      marginRight: '1%'
    },
    heading: {
        float: 'left',
        marginBottom: '1%'
    },
    cardRoot: {

    },
    cardParent: {
        display: 'flex',

        //3
        // flexDirection: 'column'
    },
    cardImg: {
        //1
        display: 'inline-block',
        flex: 1,
        margin: 'auto'

        //2
        // flex: 1,
        // backgroundColor: 'red',
        // color: 'white',
        // fontWeight: 'bold'
    },
    button: {
        fontSize: '10px',
        textAlign: 'left',
        textTransform: 'capitalize',
        fontWeight: '800',
        whiteSpace: 'nowrap'
    },
    cardHead: {
        fontSize: '13px',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '5px'
    },
    cardContent: {
        //1
        flex: '3',

        //2
        // paddingLeft: '5px'

        //3
        // display: 'inline-flex'
    },
    //3
    // line: {
    //     width: '100%'
    // },
    //3
    // avatar: {
    //     marginLeft: '5px',
    //     marginBottom: '5px'
    // }
});
class Content extends Component {
    state = {
        data: []
      }

      componentDidMount(){
        fetch("http://localhost:8000/pinnedActions")
        .then((res) => res.json())
        .catch((err) =>
          fetch("db.json")
            .then((res) => res.json())
            .then((data) => data.products)
        )
        .then((data) => {
            this.setState({ data });
        });
      }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h5" className={classes.heading}>
                Pinned Actions
                </Typography>
                <Grid container spacing={3}>

                {this.state.data.map((data,key) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Card className={classes.cardRoot} variant="outlined">

                                <div className={classes.cardParent}>
                                    <div className={classes.cardImg}>
                                        <img src={`assets/clip_pad.svg`} alt='clip pad' />
                                    </div>
                                    <div className={classes.cardContent}>
                                        <span className={classes.cardHead}>
                                        <mark style={{color:`${data.color}`, backgroundColor:`${data.backgroundColor}`}}>Application Name</mark>
                                        </span>
                                        <Typography variant="h6" align="left">Form name 1245</Typography>
                                        <Typography variant="body2" align="left">Form Description More Details....</Typography>
              
                                        <Button className={classes.button} style={{color:'purple'}}>View All Submissions</Button>
                                        <Button className={classes.button} style={{color:'green'}}>Add New</Button>
      
                                    </div>
                                </div>
                        </Card>
                    </Grid>
                ))}
                </Grid>
                {/* <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Card className={classes.cardRoot} variant="outlined">

                                <div className={classes.cardParent}>
                                    <div className={classes.cardImg}>
                                        <p>C</p>
                                    </div>
                                    <div className={classes.cardContent}>
                                    <Typography variant="subtitle2" align="left" style={{fontWeight:"bold"}}>Form Description More Details....</Typography>
                                        <Typography variant="body2" align="left">Form Description More Details....</Typography>     
                                    </div>
                                </div>
                        </Card>
                    </Grid>
                </Grid> */}
                {/* <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Card className={classes.cardRoot} variant="outlined">
                                <div className={classes.cardParent}>
                                    <div className={classes.cardImg}>
                                    <img src={`assets/clip_pad.svg`} alt='clip pad' />
                                    </div>
                                    <hr className={classes.line} />
                                    <div className={classes.cardContent}>
                                    <Avatar className={classes.avatar}>N</Avatar>
                                    <Typography variant="body2" align="left" style={{padding:'10px'}}>Form Description More Details....</Typography>     
                                    </div>
                                </div>
                        </Card>
                    </Grid>
                </Grid> */}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Content);
