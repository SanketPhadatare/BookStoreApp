// import React from 'react'


// function Contact() {
//   return (
//     <div>
//   <div className='flex h-screen items-center justify-center'>
//         <div className="w-[600px]">
//           <div className="modal-box">
//             <form >
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </Link>

//               <h3 className="font-bold text-lg"><b>Contact Us</b></h3>

//               {/* Name */}
//               <div className='mt-4 space-y-2'>
//                 <span>Name</span>
//                 <br />
//                 <input
//                   type="text"
//                   placeholder='Enter your fullname'
//                   {...register("name", { required: "Name is required" })}
//                   className='w-80 px-3 py-1 border rounded-md outline-none'
//                 />
//                 <br />
//                 {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
//               </div>

//               {/* Email */}
//               <div className='mt-4 space-y-2'>
//                 <span>Email</span>
//                 <br />
//                 <input
//                   type="email"
//                   placeholder='Enter your email'
//                   {...register("email", { required: "Email is required" })}
//                   className='w-80 px-3 py-1 border rounded-md outline-none'
//                 />
//                 <br />
//                 {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
//               </div>

//               {/* Password */}
//               <div className='mt-4 space-y-2'>
//                 <span>Message</span>
//                 <br />
//                 <input
//                   type="message"
//                   placeholder='Enter your message'
//                   {...register("message", { required: "message is required" })}
//                   className='w-80 px-3 py-1 border rounded-md outline-none'
//                 />
//                 <br />
//                 {errors.message && <span className='text-sm text-red-500'>{errors.message.message}</span>}
//               </div>

//               {/* Button Signup */}
//               <div className='flex justify-around mt-4'>
//                 <button type="submit" className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
                
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact




import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Optionally navigate to another page after successful submission
    // navigate('/some-page');
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg"><b className='text-2xl'>Contact Us</b></h3>

            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder='Enter your fullname'
                {...register("name", { required: "Name is required" })}
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
              <br />
              {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
            </div>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                {...register("email", { required: "Email is required" })}
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
            </div>

            {/* Message */}
            <div className='mt-4 space-y-2'>
              <span>Message</span>
              <br />
              <textarea
                placeholder='Enter your message'
                {...register("message", { required: "Message is required" })}
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
              <br />
              {errors.message && <span className='text-sm text-red-500'>{errors.message.message}</span>}
            </div>

            {/* Button Submit */}
            <div className='flex justify-left mt-4'>
              <button type="submit" className='h-10 w=20 bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
