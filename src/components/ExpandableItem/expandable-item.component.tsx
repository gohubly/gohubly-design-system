import React from 'react'
import { Flex } from 'rebass';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { iExpandableItem } from './expandable-item.types';
import * as css from './expandable-item.styles'

export const ExpandableItem: React.FC<iExpandableItem> = ({
  title,
  minWidth = '300px',
  data,
  itemRight,
  onItemClick,
  expanded,
  onExpandClick,
  buttonsProps = []
}): JSX.Element => {
  return (
    <Flex flexDirection="column" minWidth={minWidth}>
      <css.ContainerList expanded={expanded}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
          padding="15px 12px 15px 15px"
        >
          <Flex fontSize="14px" lineHeight="18px">
            {title}
          </Flex>
          <Flex style={{ gap: '8px' }}>
            { itemRight }
            <Icon
              iconId={expanded ? 'chevronUp' : 'chevronDown'}
              size="MD"
              onClick={onExpandClick}
            />
          </Flex>
        </Flex>

        {expanded && (
          <Flex width="100%" justifyContent="center" padding="0 8px 8px 8px">
            <Flex className="item" height="176px" width="100%" padding="16px">
              <Flex flexDirection="column" width="100%" justifyContent="space-between">
                <Flex flexDirection="column" style={{ gap: '16px' }}>
                  {
                    data.map(({ label, value }) => (
                      <css.Item>
                        <Flex fontSize="12px" lineHeight="16px" color="#555555">
                          label
                        </Flex>
                        <Flex fontSize="12px" lineHeight="16px">
                          {value}
                        </Flex>
                      </css.Item>
                    ))
                  }
                </Flex>

                <Flex justifyContent="space-between" flex="1 1 0px" marginTop="20px" style={{ ...(buttonsProps.length > 1 && { gap: '8px' }) }}>
                  {
                    buttonsProps.length && buttonsProps.map((props, index) => (
                      <Button {...props} fluid>
                        <Typography size="XXXS" lineHeight="LG" color={index !== 0 ? 'primary' : 'white'}>
                          { props.children }
                        </Typography>
                      </Button>
                    ))
                  }
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
      </css.ContainerList>
    </Flex>
  )
}

export default ExpandableItem;