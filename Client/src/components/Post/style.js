import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: "200px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    "&:before": {},
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    cursor: "pointer",
    transition: "transform .2s ease-in-out",
    "&:hover": {
      transform: " translateY(-10px)",
    },
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  detail: {
    padding: "10px",
    background: "#ff1c00",
    borderRadius: "50px",
    margin: "0px 5px",
    color: "#fff",
    font: "bold",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
