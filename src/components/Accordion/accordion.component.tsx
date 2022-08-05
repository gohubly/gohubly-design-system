import React, { useState } from 'react'
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { iAccordion } from './accordion.interface';
import * as css from './accordion.style'

export const Accordion: React.FC<iAccordion> = ({ items, width = "400px", fluid, highlightLabel, action }) => {
  const [openedAccordion, setOpenedAccordion] = useState<string | undefined>(undefined);

  const renderLabelWithHighlight = (label: string) => {
    const splitted = label.split(" ");
    
    return splitted.map((label, index) => (
      <Typography size='XS' color={index < splitted.length - 2 && highlightLabel ? 'primary' : 'neutralLow'}>
        <css.Label clear={index > 0}>
          { label }
        </css.Label>
      </Typography>
    ))
  }

  if (width === "100%") throw new Error("use fluid intead of setting width to 100%");

  return (
    <css.Container width={width} fluid={fluid}>
      {
        items.map(({ label = '', value, items = [] }) => (
          <css.AccordionItemContainer>
            <css.Item onClick={() => setOpenedAccordion(value === openedAccordion ? undefined : value)}>
              <css.LeftContent>
                {items.length > 0 && <Icon iconId={value === openedAccordion ? 'chevronUp' : 'chevronDown'} size='MD' />}

                {
                  renderLabelWithHighlight(label)
                }
              </css.LeftContent>

              {action && (
                <Button hierarchy='ghost' onClick={e => {
                  e.stopPropagation();
                  action?.onClick && action.onClick();
                }} size="SM">
                  <Typography color='primary' size='XXS'>
                    { action.text }
                  </Typography>
                </Button>
              )}
            </css.Item>

            { items?.length > 0 && items.map(({ label }) => (
              <css.Children open={value === openedAccordion}>
                { label }
              </css.Children>
            )) }
          </css.AccordionItemContainer>
        ))
      }
    </css.Container>
  )
}