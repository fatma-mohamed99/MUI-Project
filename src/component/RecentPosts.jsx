import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Favorite, Chat } from '@mui/icons-material';
import Image1 from '../assets/img/blogg.jpg'; 
import Image2 from '../assets/img/blog.jpg'; 

const PostCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '10px',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '150px',
  height: '270px',
  overflow: 'hidden',
  marginRight: '20px',
}));

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
});

const Content = styled(CardContent)(({ theme }) => ({
  flex: 1,
  padding: '0',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  marginBottom: '10px',
}));

const Meta = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  color: '#7F8C8D',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#333',
  marginBottom: '20px',
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#695aa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#594b9a',
  },
}));

const PostsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const CenteredText = styled(Box)({
  textAlign: 'center',
  marginBottom: '40px',
});

const Spacer = styled(Box)({
  margin: '20px 0',
});

function RecentPosts() {
  return (
    <PostsContainer>
      <CenteredText>
        <Typography
          variant="h6"
          style={{
            color: '#7F8C8D',
            marginTop: '50px',
            marginBottom: '10px',
            fontWeight: 500,
            fontFamily: "'Baloo Paaji', cursive",
          }}
        >
          Recent Posts?
        </Typography>
        <Typography
          variant="h3"
          style={{
            color: '#695aa6',
            fontWeight: 800,
            fontFamily: "'Baloo Paaji', cursive",
          }}
        >
         Blog
        </Typography>
      </CenteredText>
      <PostCard>
        <ImageContainer>
          <StyledImage src={Image2} alt="Recent Post" />
        </ImageContainer>
        <Content>
          <Title>Post Title</Title>
          <Meta>
            <MetaItem>
              <Favorite fontSize="small" />
              <Typography>456</Typography>
            </MetaItem>
            <MetaItem>
              <Chat fontSize="small" />
              <Typography>264</Typography>
            </MetaItem>
          </Meta>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.
          </Description>
          <ReadMoreButton variant="contained">Read more</ReadMoreButton>
        </Content>
      </PostCard>
      <PostCard>
        <ImageContainer>
          <StyledImage src={Image1} alt="Recent Post" />
        </ImageContainer>
        <Content>
          <Title>Post Title</Title>
          <Meta>
            <MetaItem>
              <Favorite fontSize="small" />
              <Typography>456</Typography>
            </MetaItem>
            <MetaItem>
              <Chat fontSize="small" />
              <Typography>264</Typography>
            </MetaItem>
          </Meta>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.
          </Description>
          <ReadMoreButton variant="contained">Read more</ReadMoreButton>
        </Content>
      </PostCard>
    </PostsContainer>
  );
}

export default RecentPosts;
