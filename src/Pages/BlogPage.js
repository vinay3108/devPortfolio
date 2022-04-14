import React from 'react'
import Title from '../components/SideBars/Title'
import styled from 'styled-components';
import blogs from '../data/blogs'
import { InnerLayout,MainLayout } from '../Styles/Layout'
const BlogPage = () => {
    return (
        <MainLayout>

        <BlogsStyled>
            <Title title={"Blogs"} span={"Blogs"}/>
           <InnerLayout className={'blog'}>
                {
                    blogs&&
                        blogs.map((blog)=>{
                            return <div key={blog.id} className={'blog-item'}>
                                <div className="image">
                                    <img src={blog.image} alt=""/>
                                </div>
                                <div className="title">
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
            </MainLayout>
    )
}
const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 2rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        padding-bottom: 0.5rem;
        &:hover {
          cursor: pointer;
          transform: rotate(4deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.4rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default BlogPage
