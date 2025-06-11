import Loader from '@/components/loader/loader';

export default function loading() {
    return <div className='align-items-center justify-content-center d-flex w-100' style={{ height: '100vh' }}>
        <Loader />
    </div>;
}