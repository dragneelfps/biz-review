import React, { useRef, useState, useCallback } from 'react'
import { FormControl, TextField, InputLabel, Select, MenuItem, IconButton, Fab } from '@material-ui/core';

import { Add, Delete, Edit } from '@material-ui/icons'

import './AddReviewForm.css'

function AddEditReviewForm({ onAddReview, isEditMode, onEditReview, onDeleteReview, ...props }) {

    const yyyy = String(new Date().getFullYear())
    const mm = String(new Date().getMonth() + 1).padStart(2, '0')
    const dd = String(new Date().getDate()).padStart(2, '0')
    const today = `${yyyy}-${mm}-${dd}`

    let initBizName = "Expedia"
    let initEmail = "drag@gmail.com"
    let initRating = 4
    let initComment = "Fantasic Place to Work"
    let initDate = today

    if(isEditMode) {
        initBizName = props.review.bizName
        initEmail = props.review.email
        initRating = props.review.rating
        initComment = props.review.comment
        initDate = props.review.date
    } else {
        initDate = today
    }

    const [bizName, setBizName] = useState(initBizName)
    const [email, setEmail] = useState(initEmail)
    const [rating, setRating] = useState(initRating)
    const [comment, setComment] = useState(initComment)
    const [date, setDate] = useState(initDate)

    const onBizNameChange = (e) => {
        setBizName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onRatingChange = e => {
        setRating(e.target.value)
    }

    const onCommentChange = e => {
        setComment(e.target.value)
    }

    const onDateChanged = e => {
        setDate(e.target.value)
    }

    const validate = () => {
        if (bizName.length <= 0) {
            return false
        }
        if (email.length <= 0) {
            return false
        }
        if (rating.length <= 0) {
            return false
        }
        if (comment.length <= 0) {
            return false
        }
        return true
    }

    const handleAddReview = useCallback(() => {
        if (validate()) {
            onAddReview({
                bizName,
                email,
                rating,
                comment,
                date
            })
        }
    }, [bizName, email, rating, comment, date])

    const handleDelete = useCallback(() => {
        if(isEditMode) {
            onDeleteReview(props.review.id)
        } else {
            setBizName("")
            setEmail("")
            setRating("")
            setComment("")
            setDate(today)
        }
    }, [today, isEditMode, props])

    const handleEditSaveReview = useCallback(() => {
        if (validate()) {
            onEditReview({
                id: props.review.id,
                bizName,
                email,
                rating,
                comment,
                date
            })
        }
    }, [bizName, email, rating, comment, date])


    return (
        <form className="form">
            <TextField
                margin="normal"
                label="Business Name"
                value={bizName}
                onChange={onBizNameChange}
            />
            <TextField
                margin="normal"
                label="Email"
                value={email}
                onChange={onEmailChange}
            />
            <FormControl
                margin="normal">
                <InputLabel htmlFor="rating">Rating</InputLabel>
                <Select value={rating} onChange={onRatingChange} inputProps={{ name: 'rating', id: 'rating' }}>
                    <MenuItem value={1}>1 Star</MenuItem>
                    <MenuItem value={2}>2 Star</MenuItem>
                    <MenuItem value={3}>3 Star</MenuItem>
                    <MenuItem value={4}>4 Star</MenuItem>
                    <MenuItem value={5}>5 Star</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Comment"
                value={comment}
                onChange={onCommentChange}
                margin="normal"
            />
            <TextField
                label="Review Date"
                value={date}
                onChange={onDateChanged}
                type="date"
                margin="normal"
                InputLabelProps={{
                    shrink: true
                }}
            />
            <div className="add-review-actions">
                {!isEditMode ? 
                <Fab color="primary" variant="extended" onClick={handleAddReview}>
                    <Add /> Add
               </Fab> : 
                <Fab color="primary" variant="extended" onClick={handleEditSaveReview}>
                    <Edit />Save
                </Fab>}

                <Fab color="secondary" variant="extended" onClick={handleDelete}>
                    <Delete /> {isEditMode ? "Delete" : "Reset"}
               </Fab>
            </div>
        </form>
    )
}

export default AddEditReviewForm