import { FC, useState } from 'react'
import {
  Box,
  Input,
  SearchField,
  SearchIcon,
  SearchInput,
} from 'styles/Search.module'

const Search: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false)

  return (
    <SearchField>
      <SearchIcon onClick={(): void => setVisible(true)} />
      {isVisible && (
        <>
          <div
            onClick={(): void => setVisible(false)}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'fixed',
              cursor: 'default',
            }}
          />
          <Input>
            <SearchInput />
            <Box>
              <SearchIcon />
            </Box>
          </Input>
        </>
      )}
    </SearchField>
  )
}

export default Search
