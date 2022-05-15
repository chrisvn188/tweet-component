import React from 'react'
import Avatar from './Avatar'
import Author from './Author'
import { StyledTweet } from './styles'
import Message from './Message'
import Time from './Time'
import ReplyButton from './ReplyButton'
import RetweetButton from './RetweetButton'
import LikeButton from './LikeButton'
import MoreOptionsButton from './MoreOptionsButton'

const Tweet = () => {
  return (
    <StyledTweet>
      Tweet
      <Avatar />
      <Author />
      <Time />
      <Message />
      <ReplyButton />
      <RetweetButton />
      <LikeButton />
      <MoreOptionsButton />
    </StyledTweet>
  )
}

export default Tweet
