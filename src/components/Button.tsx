import React from 'react'

interface Props {
  children: String;
  onClick: 'primary' | 'secondary' | 'danger';
  color?: string;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={`btn btn-${color}`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
