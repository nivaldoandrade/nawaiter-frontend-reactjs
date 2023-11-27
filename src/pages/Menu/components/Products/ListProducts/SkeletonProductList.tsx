import Skeleton from 'react-loading-skeleton';

export function SkeletonProductsList() {
  return (
    <>
      {new Array(10).fill(0).map((_, index) => (
        <tr key={index}>
          <td>
            <Skeleton height={37} width={48} />
          </td>
          <td>
            <Skeleton width="100%" />
          </td>
          <td>
            <Skeleton width="100%" />
          </td>
          <td>
            <Skeleton width="100%" />
          </td>
          <td>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Skeleton height={37} width={40} />
              <Skeleton height={37} width={40} />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
