import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import ReviewItem from './ReviewItem'
import Title from './SideBars/Title'

const ReviewSection = () => {
    return (
      <ReviewSectionStyled>
        <Title title={"Reviews"} span={"Reviews"} />
        <InnerLayout>
          <div className="reviews">
            <ReviewItem
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ea aliquid deleniti!"
              }
            />
            <ReviewItem
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ea aliquid deleniti! ea aliquid deleniti!"
              }
            />
          </div>
        </InnerLayout>
      </ReviewSectionStyled>
    );
}
const ReviewSectionStyled = styled.section`
.reviews{
    display: flex;
}



`;
export default ReviewSection
