import React, { useState } from 'react';
import { Typography, AppBar, Tabs, Tab, TabPa } from '@material-ui/core'
import './App.css';
import AddEditReviewForm from './AddReviewForm';
import AllReviews from './AllReviews';

let id = 0

function App() {

  const [reviews, setReviews] = useState([])

  const [currentTab, setCurrentTab] = useState(0)

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editReview, setEditReview] = useState(null)

  const handleTabChange = (e, newVal) => {
    setCurrentTab(newVal)
    console.log(newVal)
  }

  const onAddReview = (review) => {
    review.id = ++id
    console.log(review)
    setReviews([...reviews, review])
  }

  const onDeleteReview = (reviewId) => {
    const newReviews = []
    reviews.forEach(rev => {
      if (rev.id !== reviewId) {
        newReviews.push(rev)
      }
    })
    setReviews(newReviews)

    if (isEditOpen) {
      setIsEditOpen(false)
      setEditReview(null)
      setCurrentTab(0)
    }
  }

  const onEditReview = (review) => {
    const newReviews = []
    reviews.forEach(rev => {
      if (rev.id !== review.id) {
        newReviews.push(rev)
      } else {
        newReviews.push(review)
      }
    })
    setReviews(newReviews)
  }

  const onOpenEditReview = (review) => {
    setIsEditOpen(true)
    setEditReview(review)
  }


  return (
    <div>
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        <Tab label="Add Review"></Tab>
        {reviews.length > 0 && <Tab label="All Reviews" />}
        {isEditOpen && <Tab label="Edit Review" />}
      </Tabs>
      {currentTab === 0 && <AddEditReviewForm onAddReview={onAddReview} />}
      {currentTab === 1 && <AllReviews reviews={reviews} onDeleteReview={onDeleteReview} onOpenEditReview={onOpenEditReview} />}
      {currentTab === 2 && isEditOpen && <AddEditReviewForm onEditReview={onEditReview} isEditMode={isEditOpen} review={editReview} onDeleteReview={onDeleteReview} />}
    </div>
  );
}

export default App;
