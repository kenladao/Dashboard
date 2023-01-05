import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    graph:{
        width: "auto",
        height: "350px",
        background: "#3D3D3D",
        borderRadius: "20px",
        textAlign: "start",
    },
    graphHeader:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        alignItems: 'center',
        color: '#40F2DD',
        paddingLeft: 27,
        paddingTop: 14
    },
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
    },

    paper1: {
        width: "auto",
        height: "165px",

        backgroundColor: "#D9D9D9",
        borderRadius: "20px",
        
    },
    header3: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: "10px 5px 10px 5px"

    },
    body3: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 40,
        alignItems: 'center',
        textAlign: 'center',
        color: "#000000",
        marginTop: 12,
        padding: "10px 5px 10px 5px"
    },
    paper2: {
        width: "auto",
        height: "165px",

        backgroundColor: "#40F2DD",
        borderRadius: "20px",
        
    },
    header4: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
        padding: "10px 5px 10px 5px"

    },
    body4: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#FFFFFF",
        padding: "10px 5px 10px 5px"
    },

    monthly:{
        height: 165,
        background: "#3D3D3D",
        borderRadius: 20
    },
    monthHeader: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
        padding: "2px"
    },
    date:{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "10px",
        alignItems: "center",
        textAlign: 'left'
    },
    sale: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "10px",
        alignItems: "center",
        textAlign: 'right',
        color: "#40F2DD"
    }
}));