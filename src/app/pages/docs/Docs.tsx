import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import "./Docs.scss";
import { getDocs } from '../../../services/doc';
import { useEffect, useState } from 'react';

export const Docs = () => {
  const [docsDatasource, setDocsDatasource] = useState<CollapseProps['items'] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDocs();
      setDocsDatasource(result);
    };

    fetchData();
  }, []);

  return (
    <div className='docs'>
      <h1>Docs</h1>

      { docsDatasource ? (
        <Collapse items={docsDatasource} />
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  )
}