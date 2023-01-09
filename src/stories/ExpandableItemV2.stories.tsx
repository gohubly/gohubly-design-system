import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExpandableItemV2 as ExpandableItem } from "../components/ExpandableItem/v2";
import { Tag } from "../components/Tag/tag.style";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

export default {
  title: "Components/ExpandableItem/V2",
  component: ExpandableItem,
} as ComponentMeta<typeof ExpandableItem>;

const Template: ComponentStory<typeof ExpandableItem> = (args) => (
  <ExpandableItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Expandableeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  expanded: true,
  buttonsProps: [{ children: "Button" }],
  data: [
    { label: "Row 1", value: "Row 1" },
    { label: "Row 2", value: "Row 2" },
    { label: "Row 3", value: "Row 3" },
  ],
};

export const WithAvatar = Template.bind({});

WithAvatar.args = {
  title: "Caio Espírito",
  avatar: true,
  itemRight: <>D53AC43F-06</>,
  expanded: true,
  data: [
    {
      label: "Tipo",
      value: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <Icon iconId="youtube" size="XS" gray />
          Vídeo
        </div>
      ),
    },
    {
      label: "Tipo",
      value: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <Icon iconId="file1" size="XS" gray />
          Arquivo
        </div>
      ),
    },
    {
      label: "Data do envio",
      value: "06/01/23",
    },
  ],
  children: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Button hierarchy="ghost" size="SM">
        Ver mais detalhes
      </Button>
    </div>
  ),
};

export const WithStyledButton = Template.bind({});

WithStyledButton.args = {
  title: "Expandableeeeeeeeeeeeeeeeeeeeee",
  expanded: true,
  itemRight: (
    <Button size="SM" hierarchy="ghost">
      Ver vídeo
    </Button>
  ),
  data: [
    {
      label: "Tipo",
      value: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <Icon iconId="file1" size="SM" gray />
          Arquivo
        </div>
      ),
    },
    {
      label: "Tipo",
      value: (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <Icon iconId="file1" size="XS" gray />
          Arquivo
        </div>
      ),
    },
    {
      label: "Data do envio",
      value: "06/01/23",
    },
  ],
  children: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Button hierarchy="ghost" error icon="trash" size="SM">
        Deletar
      </Button>
    </div>
  ),
};

export const WithTwoButtons = Template.bind({});

WithTwoButtons.args = {
  title: "Expandable 2B",
  expanded: true,
  buttonsProps: [
    { children: "Button" },
    { children: "Button 2", hierarchy: "secondary" },
  ],
  data: [
    { label: "Row 1", value: "Row 1" },
    { label: "Row 2", value: "Row 2" },
    { label: "Row 3", value: "Row 3" },
  ],
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  title: "Expandable 2B WI",
  expanded: true,
  itemRight: <Tag hierarchy="success">Icon test</Tag>,
  buttonsProps: [
    { children: "Button" },
    { children: "Button 2", hierarchy: "secondary" },
  ],
  data: [
    { label: "Row 1", value: "Row 1" },
    { label: "Row 2", value: "Row 2" },
    { label: "Row 3", value: "Row 3" },
  ],
};
