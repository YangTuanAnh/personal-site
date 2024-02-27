const Resume = () =>
{
    return (
        <div className="text-center">
            <a href="YangTuanAnh_SWEResume_2024.pdf" download>
                <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 my-6 rounded-lg items-center">
                    Download
                </button>
            </a>
            <iframe src="YangTuanAnh_SWEResume_2024.pdf" width="100%" height="800px" />
        </div>
    )
}
export default Resume;