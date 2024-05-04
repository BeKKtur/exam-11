import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import {CATEGORY} from "../../category";
import React, {useState} from "react";
import {ItemMutation} from "../../types";
import {addItem} from "./ItemThuck";
import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";

const AddItemForm = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const [state, setState] = useState<ItemMutation>({
        title: '',
        description: '',
        category: '',
        price: ''
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setState(prevState => {
            return {...prevState, [name]: value};
        } );
    };
    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        const { name, value } = e.target;
        setState(prevState => {
            return {...prevState, [name]: value};
        } );
    };

    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(addItem(state)).unwrap();
            navigate('/')
        } catch (error) {

        }
    }

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
            <Typography variant='h4' textAlign='left'>
                Create new item
            </Typography>
            <Box component="form" noValidate sx={{mt: 3}} onSubmit={submitFormHandler}>
                <Grid container spacing={2} mb='10px'>
                    <Grid item xs={12} display='flex' alignItems='center' gap='300px'>
                        <Typography variant='h6'>Title</Typography>
                        <TextField
                            required
                            label="Title"
                            name="title"
                            onChange={inputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb='10px'>
                    <Grid item xs={12} display='flex' alignItems='center' gap='236px'>
                        <Typography variant='h6'>Description</Typography>
                        <TextField
                            required
                            label="Description"
                            name="description"
                            onChange={inputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb='10px'>
                    <Grid item xs={12} display='flex' alignItems='center' gap='290px'>
                        <Typography variant='h6'>Price</Typography>
                        <TextField
                            required
                            label="Price"
                            name="price"
                            onChange={inputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb='10px'>
                    <Grid item xs={12} display='flex' alignItems='center' gap='236px'>
                        <Typography variant='h6'>select category</Typography>
                        <select onChange={selectChangeHandler}>
                            {CATEGORY.map(category => (
                                <option value={category.value} key={category.value}>{category.value}</option>
                            ))}
                        </select>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    add item
                </Button>
            </Box>
            </Box>
        </Container>

    );
};

export default AddItemForm;