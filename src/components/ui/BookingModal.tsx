import React, { useState, useEffect } from "react";
import { clinicData, ServiceItem } from "@/data/dentalData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<string>("preventive");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("any");
  const [selectedTime, setSelectedTime] = useState<string>("02:30 PM");
  const [date, setDate] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService.id);
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
      // default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDate(tomorrow.toISOString().split("T")[0]);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const timeSlots = ["09:00 AM", "11:30 AM", "02:30 PM", "04:00 PM", "05:30 PM"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0E1416] border border-[#14B8A6]/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Confirmation Success State */
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#14B8A6]/20 border border-[#14B8A6] flex items-center justify-center text-[#14B8A6] mb-5">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Appointment Reserved!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-white">{fullName}</span>. We have scheduled your clinical visit for{" "}
              <span className="font-semibold text-[#14B8A6]">{date} at {selectedTime}</span>.
              A confirmation SMS and calendar invite have been dispatched.
            </p>
            <div className="p-4 rounded-xl bg-[#142226] border border-white/10 text-xs text-slate-300 max-w-md w-full mb-8 text-left space-y-1">
              <p><span className="text-white font-medium">Clinic:</span> {clinicData.address}</p>
              <p><span className="text-white font-medium">Desk:</span> {clinicData.phone}</p>
              <p><span className="text-white font-medium">Emergency Line:</span> {clinicData.emergencyPhone}</p>
            </div>
            <button
              onClick={onClose}
              className="btn-cyan text-sm"
            >
              <span>Done</span>
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#14B8A6]">
                Fast-Track Patient Scheduling
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Book Your Clinical Session
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select your service and preferred opening. Zero waiting times guaranteed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select Specialty / Treatment
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#14B8A6] transition-colors"
                >
                  {clinicData.services.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#0E1416] text-white">
                      {s.title} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Preferred Clinician
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#14B8A6] transition-colors"
                >
                  <option value="any" className="bg-[#0E1416] text-white">
                    First Available Lead Specialist
                  </option>
                  {clinicData.specialists.map((d, i) => (
                    <option key={i} value={d.name} className="bg-[#0E1416] text-white">
                      {d.name} — {d.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#14B8A6] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Available Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#14B8A6] transition-colors"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="bg-[#0E1416] text-white">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alexander Stone"
                    required
                    className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14B8A6] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    required
                    className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14B8A6] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alexander@example.com"
                  required
                  className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14B8A6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Symptoms or Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about any specific discomfort, previous procedures, or anxiety preferences..."
                  rows={2}
                  className="w-full bg-[#142226] border border-white/15 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#14B8A6] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-cyan w-full text-sm font-semibold justify-center py-3.5"
                >
                  <span>Confirm Appointment Reservation</span>
                  <span>→</span>
                </button>
              </div>

              <p className="text-center text-[0.7rem] text-slate-400">
                🔒 HIPAA Compliant. Your medical details are encrypted and never shared.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
