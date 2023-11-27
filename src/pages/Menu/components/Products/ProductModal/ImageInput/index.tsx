import { useCallback, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { EmptyImageIcon } from '../../../../../../components/Icons/EmptyImageIcon';
import { ImageUploadIcon } from '../../../../../../components/Icons/ImageUploadIcon';
import { ErrorInput } from '../../../../../../components/Input/ErrorInput';
import { IProduct } from '../../../../../../types/Product';
import { formDataProduct } from '../useProductModal';

import { Image } from './styles';

interface ImageInputProps {
  product?: IProduct | null;
  error?: string;
  control?: Control<formDataProduct>;
}

export function ImageInput({ product, error, control }: ImageInputProps) {
  const [imagesURL, setImageURL] = useState(product ? product.srcImg : '');

  function handleUploadImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];

      const urlImage = URL.createObjectURL(file);

      setImageURL(urlImage);
    }
  }

  const ImageUpload = useCallback(() => {
    if (imagesURL) {
      return <img src={imagesURL} alt={product?.name} />;
    }

    return <EmptyImageIcon />;
  }, [imagesURL, product]);

  return (
    <Image>
      <div className="image-header">
        <strong>Imagem*</strong>
        {!imagesURL && !!error && <ErrorInput>{error}</ErrorInput>}
      </div>
      <div className="image-content">
        <div className="image-upload">
          <ImageUpload />
        </div>
        <label htmlFor="image">
          <ImageUploadIcon />
          <h6>Alterar Imagem</h6>
        </label>
        <Controller
          control={control}
          name="imagePath"
          render={({ field: { onChange } }) => (
            <input
              aria-label="Image Input"
              type="file"
              id="image"
              onChange={(e) => {
                onChange(e.target.files?.[0]);
                handleUploadImage(e);
              }}
            />
          )}
        />
      </div>
    </Image>
  );
}
