import React from 'react'

export default function Button() {
  return (
    <div>
      {/* <Stack direction="horizontal" gap={2}> */}
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
{/* // </Stack>; */}
    </div>
  )
}
