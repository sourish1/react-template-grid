import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    // cardRoot: {
    //     height: '90vh'
    // },
    wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    },
    dp: {
    height: '6rem',
    width: '6rem',
    },
    icons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
    },
    inputRoot: {
        height: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebe6f3',
        marginTop: '100px'
    },
    input: {
        borderRadius: '14.5px',
        width: '80%',
        height: '35%'
    },
    bubble: {
        height: '50px',
        width: '80%',
        marginBottom: '20px',
        textAlign: 'left'
    }
}))
export default function Chat() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
            <Grid item xs></Grid>
            <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
            <Card className={classes.cardRoot}>
            <div className={classes.wrapper}>
            <Avatar className={classes.dp} alt="Jessica Swan" src={`./assets/dp.png`} />
            <div>
            <p style={{fontSize:'30px'}}>Jessica Swan</p>
            <p style={{marginTop:'-30px'}}>31 Dec 2019 3:35pm</p>
            </div>
            </div>
            <p>Thank you HR team for arranging such amazing Fun Friday Party</p>
            <div className={classes.icons}>
            <img src={`./assets/like.svg`} alt="like" />
            <img src={`./assets/liked.svg`} alt="liked" />
            <img src={`./assets/comment.svg`} alt="comment" />
            </div>
            <hr />
            <p>In conversation with all the employees</p>
            <hr />
            <div className={classes.bubble} style={{backgroundColor:'#ebe6f3'}}><p>This is the chat i have written which is very long</p></div>
            <div className={classes.bubble} style={{backgroundColor:'#e7f3e8', float:'right'}}><p>This is the chat i have written which is very long</p></div>
            <br />
            <div className={classes.inputRoot}>
                <input className={classes.input} type="text" />

            </div>
            </Card>
            </Grid>
            <Grid item xs></Grid>
            </Grid>
        </div>
    )
}
