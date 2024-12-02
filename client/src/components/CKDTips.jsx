import React from "react";

const CKDTips = () => {
  return (
    <div className="ckd-tips pt-8 pb-14 text-black text-left leading-8">
      <h3 className="text-3xl font-bold mb-4 text-center">
        Tips for Managing Chronic Kidney Disease
      </h3>
      <ul className="list-disc list-inside">
        <li className="text-[20px]">
          <strong>Eat Right:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5 text-[16px]">
          <li>
            <strong>Cut Down on Salt:</strong> Use less salt in your food. Try
            herbs and spices instead.
          </li>
          <li>
            <strong>Watch Your Protein:</strong> Don't eat too much meat or
            dairy. Balance is key.
          </li>
          <li>
            <strong>Limit Potassium and Phosphorus:</strong> Avoid bananas,
            tomatoes, and dark sodas.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Stay Healthy:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li>
            <strong>Exercise Regularly:</strong> Walk, swim, or do light
            exercises most days.
          </li>
          <li>
            <strong>Don't Smoke:</strong> If you smoke, try to quit. It’s better
            for your kidneys.
          </li>
          <li>
            <strong>Limit Alcohol:</strong> Avoid alcohol.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Monitor Your Health:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li>
            <strong>Check Your Blood Pressure:</strong> Keep an eye on it and
            aim for a healthy range.
          </li>
          <li>
            <strong>Regular Doctor Visits:</strong> See your doctor regularly to
            check on your kidneys.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Reduce Stress:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li>
            <strong>Relax:</strong> Try meditation, deep breathing, or yoga to
            stay calm.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Stay Informed:</strong>
        </li>
        <ul className="list-disc list-inside ml-5 mb-5">
          <li>
            <strong>Know the Signs:</strong> Watch for swelling, tiredness, or
            changes in urine. Tell your doctor if you notice anything new.
          </li>
        </ul>
        <p>
          <strong>Always Ask Your Doctor:</strong> Before changing your diet,
          exercise, or taking new meds, talk to your doctor.
        </p>
      </ul>
    </div>
  );
};

export default CKDTips;
