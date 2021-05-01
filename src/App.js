import "./App.css";
import resume from "./ChaonengQuan_Resume.pdf";
import { Divider, Grid, Paper, Typography, Link } from "@material-ui/core";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function App() {
    return (
        <div className="App">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Paper style={{ padding: 25, borderRadius: 25 }}>
                    <Typography variant="h5">
                        Welcome to Chaoneng Quan's Github Page
                    </Typography>
                    <Divider />
                    <Typography
                        variant="subtitle1"
                        style={{ color: "lightgrey" }}
                    >
                        (this page is under construction)
                    </Typography>
                    <Divider />

                    <Typography variant="body1">
                        My Linkedin:
                        <Link href="https://www.linkedin.com/in/chaonengquan">
                            linkedin.com/in/chaonengquan
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        My Github:
                        <Link href="https://github.com/ChaonengQuan">
                            github.com/ChaonengQuan
                        </Link>
                    </Typography>

                    <Typography variant="body1">My Resume:</Typography>
                    <Document file={resume}>
                        <Page pageNumber={1} />
                    </Document>
                </Paper>
            </Grid>
        </div>
    );
}

export default App;
