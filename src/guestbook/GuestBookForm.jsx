export default function GuestBookForm({ref, name, setName}){

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    return(
        <div>
            <label htmlFor="name">Name</label>
            <input ref={ref} type="text" name="name" value={name} onChange={handleChange} />
        </div>
    )
}

//tinggal tambahkan ref di props, dan ref={ref}
//ref bisa digunakan sebagai referensi ke element tertentu di dalam componentnya