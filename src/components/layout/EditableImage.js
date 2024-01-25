
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { firebaseApp } from '@/app/api/upload/firebase';
import Link from 'next/link';

export default function EditableImage({ link, setLink }) {
  const storage = getStorage(firebaseApp);

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const file = files[0];
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress (if needed)
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Error uploading file:', error);
          toast.error('Upload error');
        },
        () => {
          // Handle successful uploads on completion
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setLink(downloadURL);
            toast.success('Upload complete');
          });
        }
      );
    }
  }

  return (
    <>
      {Link && (
        <Image className="rounded-lg w-full h-full mb-1 mt-2" src={link} width={250} height={250} alt={'avatar'} />
      )}
      {!Link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1 mt-2">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <p className='text-center'>(Only jpeg and png allowed)</p>
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Change image</span>
      </label>
    </>
  );
}
