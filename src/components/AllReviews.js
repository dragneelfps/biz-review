import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Fab } from '@material-ui/core';
import { Delete, Edit, Star } from '@material-ui/icons';

function AllReviews({ reviews, onDeleteReview, onOpenEditReview }) {

    if (reviews.length <= 0) {
        return <></>
    }

    const renderStars = (rating) => {
        const stars = []
        for (let i = 0; i < rating; i++) {
            const star = (
                <Star key={i} />
            )
            stars.push(star)
        }
        return stars
    } 

    const handleOpenEditReview = (review) => {
        onOpenEditReview(review)
    }

    return (
        <>
            {reviews.map((review) => {
                return (
                    <Card key={review.id}>
                        <CardContent>
                            <Typography>{review.bizName}</Typography>
                            {renderStars(review.rating)}
                            <Typography>{review.comment}</Typography>
                            <Typography>{review.email}</Typography>
                        </CardContent>
                        <CardActions>
                            <Fab color="primary" variant="extended" onClick={() => handleOpenEditReview(review)}>
                                <Edit />
                                Edit
                            </Fab>
                            <Fab color="secondary" variant="extended" onClick={() => onDeleteReview(review.id)}>
                                <Delete />
                                Delete
                            </Fab>
                        </CardActions>
                    </Card>
                )
            })}
        </>
    )

}

export default AllReviews