import {
  Action,
  ActionPanel,
  Clipboard,
  Detail,
  Icon,
  List,
  popToRoot,
  closeMainWindow,
  showHUD,
} from '@raycast/api';
import { useState } from 'react';
import tagsJSON from './music_tags.json';

export default function Tags() {
  const { tags } = tagsJSON as Record<'tags', Tags>;
  const [tagsColl, setTagsColl] = useState<Tags>([]);

  const tagPreview = `Selected tags: ${[...tagsColl].sort().join(', ')}`;

  function handleSelect(isSelected: boolean, tag: Tags[number]) {
    if (isSelected) {
      setTagsColl(tagsColl.filter(t => t !== tag));
    } else {
      setTagsColl([...tagsColl, tag]);
    }
  }

  function handleSubmit() {
    const tagString = [...tagsColl]
      .sort()
      .map(t => `#${t}`)
      .join(' ');
    Clipboard.copy(tagString).then(() => {
      popToRoot({ clearSearchBar: true }).then(() => {
        closeMainWindow();
        showHUD('📋 Tag string copied to clipboard!');
      });
    });
  }

  return (
    <>
      <Detail markdown={tagPreview} />
      <List navigationTitle={tagPreview}>
        {tags.map(tag => {
          const isSelected = tagsColl.includes(tag);
          return (
            <List.Item
              key={tag}
              title={tag}
              icon={isSelected ? Icon.Checkmark : Icon.Circle}
              actions={
                <ActionPanel>
                  <Action title="Select" onAction={() => handleSelect(isSelected, tag)} />
                  <Action title="Get tagstring" onAction={handleSubmit} />
                </ActionPanel>
              }
            />
          );
        })}
      </List>
    </>
  );
}
