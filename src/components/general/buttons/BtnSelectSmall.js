import styled, {css} from "styled-components";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BtnSmallRoot, BtnIcon, BtnTextBlock, BtnText } from "./BtnSmall";
import ExpandIcon from '../../svg/expand.svg?react';

const LisboxOptionsRoot = styled.ul`
  position: absolute;
  z-index: 5;
  margin-top: var(--padding-6px);
  max-height: 200px;
  overflow: auto;
  border-radius: var(--br-4px);
  width: 100%;
  background: var(--bg-block-highlighted-bg);
  padding: 0px;
  list-style: none;
`;

const LisboxOptionsItem = styled.li`
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  font-size: var(--text-12-size);
  color: var(--color-text-2lvl);
  font-weight: var(--text-medium);
  padding: var(--padding-8px) var(--padding-16px);
  &:hover{
    color: var(--color-text-1lvl);
  }

  ${(props) => props.active ? css`
    background: var(--bg-element-bg);
    color: var(--color-text-1lvl);
    cursor: default;
  ` : ''}
`;
const ListboxContainer = styled.div`
  position: relative;
`;

const BtnSelectSmall = ({
  data = [
    { text: 'Wade Cooper' },
    { text: 'Arlene Mccoy' },
    { text: 'Devon Webb' },
    { text: 'Tom Cook' },
    { text: 'Tanya Fox' },
    { text: 'Hellen Schmidt' },
  ],
  selectedDefault = 0
}) => {
  const [selected, setSelected] = useState(data[selectedDefault])

  return (
    
    <Listbox value={selected} onChange={setSelected}>
      <ListboxContainer>
        <Listbox.Button as={BtnSmallRoot} type="secondary">
          <BtnTextBlock>
            <BtnText>{selected.text}</BtnText>
          </BtnTextBlock>
          <BtnIcon><ExpandIcon/></BtnIcon>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options as={LisboxOptionsRoot}>
            {data.map((item, itemIdx) => (
              
              <Listbox.Option
                key={itemIdx}
                value={item}
                as={Fragment}
              >
                {({ selected }) => (
                    <LisboxOptionsItem active={selected}>{item.text}</LisboxOptionsItem>
                  )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </ListboxContainer>
    </Listbox>
  );
};

export default BtnSelectSmall;
