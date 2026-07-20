import React from 'react'
import Button from './Button'

const Form = ({reqType, setReqType}) => {
  return (
    <main>
        <form onSubmit={(e) => e.preventDefault()}>
            <Button 
            buttonText="users"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="posts"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="comments"
            reqType={reqType}
            setReqType={setReqType}
            />
        </form>
    </main>
  )
}

export default Form