import { AnimatePresence } from 'framer-motion'
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
      <AnimatePresence>
        {isVisible && (
          <>
            <div
              onClick={(): void => setVisible(false)}
              style={{
                top: 0,
                left: 0,
                zIndex: 1,
                width: '100%',
                height: '100%',
                position: 'fixed',
                cursor: 'default',
                scrollbarWidth: 'none',
              }}
            />
            <Input
              style={{ x: '-50%' }}
              initial={{ y: '-10%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '10%', opacity: 0 }}
              transition={{ type: 'just' }}>
              <SearchInput />
              <Box>
                <SearchIcon />
              </Box>
            </Input>
          </>
        )}
      </AnimatePresence>
    </SearchField>
  )
}

export default Search
