import React from 'react'
import styled from 'styled-components'

const ReplyComponent = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  gap: .5rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  color: hsl(238, 40%, 52%);
  position: absolute;
  bottom: 1.5rem;
  right: .8rem;
  cursor: pointer;

  &:hover {
    color: hsl(239, 57%, 85%);
    path {
      fill: hsl(239, 57%, 85%);
    }
  }

  @media (min-width: 740px) {
    position: static;
  }

`

const Reply = () => {
  return (
    <ReplyComponent>
        <span className="icon">
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
        </span>
        Reply
    </ReplyComponent>
  )
}

export default Reply