import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: "auto",
        height: "148px",

        backgroundColor: "#ADADAD",
        borderRadius: "20px",
        padding: "10px 5px 10px 5px"
    },
    headerTwo: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
    },
    bodytwo: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 48,
        alignItems: 'center',
        textAlign: 'center',
        color: "#40F2DD",
        marginTop: 12
    }
}));