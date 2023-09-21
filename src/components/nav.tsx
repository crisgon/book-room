"use client";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking-form";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <nav className="w-[1000px] flex items-center py-8 space-x-4 m-auto">
        <DialogTrigger asChild>
          <Button variant="default">Criar reserva</Button>
        </DialogTrigger>
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Calendário de reservas
        </Link>
        <Link
          href="/reservas"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Lista de reservas
        </Link>
      </nav>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservar Sala</DialogTitle>
          <DialogDescription>Faça a reserva de uma sala</DialogDescription>
        </DialogHeader>
        <BookingForm onCloseModal={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
