import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import goodsItem from './goodsItem.css'




import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





const GoodsItem = (props) => {
    const { name, price, setOrder, poster, size, liftingCapacity, tireTube, article } = props;

    return (
        <Grid item xs="12" md="4">
            <Card>
                <CardMedia
                    component="img"
                    src={poster}
                    alt={name}
                    title={name}
                    sx={{ height: 250 }}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">{name}</Typography>
                    <Typography>Размер ................................................ {size}</Typography>
                    <Typography>Грузоподъёмность ............................. {liftingCapacity}</Typography>
                    <Typography>Размер камеры ............................... {tireTube}</Typography>
                    <Typography>Артикл ........................................... {article}</Typography>
                    {/*<Typography variant="h6" component="h6">{description}</Typography>*/}


                    {/*<Accordion>*/}
                    {/*    <AccordionSummary*/}
                    {/*        expandIcon={<ExpandMoreIcon />}*/}
                    {/*        aria-controls="panel1a-content"*/}
                    {/*        id="panel1a-header"*/}
                    {/*    >*/}
                    {/*        */}
                    {/*        <Typography>Размер .......... {size}</Typography>*/}
                    {/*    </AccordionSummary>*/}
                    {/*    <AccordionDetails>*/}
                    {/*        <Typography>{description}</Typography>*/}
                    {/*    </AccordionDetails>*/}
                    {/*</Accordion>*/}


                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>














        </Grid>
    );
};

export default GoodsItem;