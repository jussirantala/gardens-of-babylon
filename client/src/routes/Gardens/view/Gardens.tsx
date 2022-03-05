import GardenViewer from 'components/GardenViewer';
import { useEffect, useState } from 'react';
import { Global, Store } from 'types';
import { first } from 'lodash';
import { MainContainer, TabsContainer, Tab } from './Gardens.styled';

const Gardens = ({ gardens, getGardens }: Props) => {
    const [selectedGarden, selectGarden] = useState<string>();
    useEffect(() => {
        getGardens();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        selectGarden(first(gardens)?.Name);
    }, [gardens])
    const currentGarden = first(gardens.filter(g => g.Name === selectedGarden)) as Global.Garden;
    return (
        <MainContainer>
            <TabsContainer>
                {gardens.map(garden => {
                    const { Name } = garden;
                    return (
                        <Tab
                            key={Name + 'tab'}
                            is-selected={selectedGarden === Name}
                            onClick={() => selectGarden(Name)}
                        >
                            {Name}
                        </Tab>
                    );
                })}
            </TabsContainer>
            {selectedGarden &&
                <GardenViewer key={currentGarden.Name} garden={currentGarden} />
            }
        </MainContainer>
    );
}

type Props = {
    gardens: Store.State['gardens'];
    getGardens: () => void;
}

export default Gardens;