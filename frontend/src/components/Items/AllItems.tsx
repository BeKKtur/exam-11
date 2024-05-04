import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {fetchItem} from "./ItemThuck";
import {Box, Card, CardContent, CardMedia, Container, Typography} from "@mui/material";

const AllItems = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.item.items );

    useEffect(() => {
        dispatch(fetchItem())
    }, [dispatch]);

    console.log(items)

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
            {items?.map(item => (
                <Card sx={{ maxWidth: 345,mb: 5, width: '300px', mr: 5}} key={item._id}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.category}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.price}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            </Box>
        </Container>
    );
};

export default AllItems;