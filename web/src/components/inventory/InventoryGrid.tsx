import React, { useRef } from 'react';
import { Inventory } from '../../typings';
import WeightBar from '../utils/WeightBar';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';
import { useAppSelector } from '../../store';
import { useIntersection } from '../../hooks/useIntersection';
import Divider from '../utils/Divider';

const PAGE_SIZE = 30;

const InventoryGrid: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
  const weight = React.useMemo(
    () => (inventory.maxWeight !== undefined ? Math.floor(getTotalWeight(inventory.items) * 1000) / 1000 : 0),
    [inventory.maxWeight, inventory.items]
  );
  const [page, setPage] = React.useState(0);
  const containerRef = useRef(null);
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const isBusy = useAppSelector((state) => state.inventory.isBusy);
  const hotInv = inventory.items.slice(0, 5)
  React.useEffect(() => {
    if (entry && entry.isIntersecting) {
      setPage((prev) => ++prev);
    }
  }, [entry]);
  return (
    <>
      <div className="inventory-grid-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto', marginTop: '-10vw' }}>
        <div>
          {/* <div style={inventory.type === "player" ? {
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            position: 'absolute',
            fontSize: `${window.innerWidth === 1280 ? '2rem' : window.innerWidth === 3840 ? '5.5rem' : '2.8rem'}`,
            display: 'flex',
            marginTop: `${window.innerWidth === 1280 ? '5.8vh' : window.innerWidth === 3840 ? '3.5vh' : '4vh'}`,
            marginLeft: `${window.innerWidth === 3840 ? '-2.4vw' : window.innerWidth === 2560 ? '-1.8vw' : '-2.5vw'}`,
            letterSpacing: '0.1rem',
          }: {
            writingMode: 'vertical-rl', // Rotate from right to left
            textOrientation: 'mixed',
            position: 'absolute',
            fontSize: `${window.innerWidth === 1280 ? '2rem' : window.innerWidth === 3840 ? '5.5rem' : '2.8rem'}`,
            display: 'flex',
            marginTop: `${window.innerWidth === 1280 ? '5.8vh' : window.innerWidth === 3840 ? '3.5vh' : '4vh'}`,
            marginLeft: `${window.innerWidth === 3840 ? '31.5vw' : window.innerWidth === 2560 ? '31.9vw' : '32vw'}`,
            letterSpacing: '0.1rem',
          }}>
            <aside>{inventory.label}</aside>
          </div> */}
          {/* Don't touch */}
          {/* <p
            style={{
              fontSize: '3.8vh',
              position: 'absolute',
              marginTop: '-0.3vh',
              width: '27vw',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap', // Add this line
              overflow: 'hidden', // Add this line
              height: '4vh',
            }}
          >
            {inventory.label}
          </p> */}
          <div style={inventory.type === "player" ? {
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            position: 'absolute',
            fontSize: '2.5vw',
            display: 'flex',
            marginTop: '2vw',
            marginLeft: '-2.5vw',
            letterSpacing: '0.1rem',
          } : {

            position: 'absolute',
            fontSize: '2vw',
            display: 'flex',
            marginTop: `${inventory.maxWeight === undefined ? '-0.8vw' : '-0.2vw'}`,
            // paddingBottom:  '1vw',// `${inventory.maxWeight === undefined ? '1vw' : '0vw'}`,
            marginLeft: 0,
            letterSpacing: '0.05vw',
          }}>
            <aside>{inventory.label}</aside>
          </div>
          <div className="inventory-grid-header-wrapper">
            &nbsp;
            {inventory.maxWeight && (
              <p>
                {weight / 1000}/{inventory.maxWeight / 1000}Kg{' '}
                <WeightBar percent={inventory.maxWeight ? (weight / inventory.maxWeight) * 100 : 0} strokesize={16} />
              </p>
            )}
          </div>
        </div>
        <div className="inventory-grid-container" ref={containerRef}>
          <>
            {inventory.items.slice(0, (page + 1) * PAGE_SIZE).map((item, index) => {
              if (index < 5 && inventory.type === "player") {
                return '';
              }
              return (
                <InventorySlot
                  key={`${inventory.type}-${inventory.id}-${item.slot}`}
                  item={item}
                  ref={index === (page + 1) * PAGE_SIZE - 1 ? ref : null}
                  inventoryType={inventory.type}
                  inventoryGroups={inventory.groups}
                  inventoryId={inventory.id}
                />
              );
            })}
          </>
        </div>
        <div style={{
          position: 'absolute',
          marginTop: '51vh',
        }}>
          {inventory.type === 'player' &&
            <div style={{ marginBottom: '0.5vw' }}>
              <div style={{ fontSize: '2vw' }}>Hotbar</div>
              <Divider />
            </div>
          }
          <div className="inventory-grid-container2" ref={containerRef}>
            <>
              {inventory.type === 'player' && hotInv.map((item, index) => (
                <InventorySlot
                  key={`${inventory.type}-${inventory.id}-${item.slot}`}
                  item={item}
                  ref={index === (page + 1) * PAGE_SIZE - 1 ? ref : null}
                  inventoryType={inventory.type}
                  inventoryGroups={inventory.groups}
                  inventoryId={inventory.id}
                />))}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryGrid;
